# API Documentation

## Contact Form API

### Endpoint

`POST /api/contact`

### Description

Handles contact form submissions with dual integration support for Notion database storage and email notifications via Resend.

### Request

#### Headers
```
Content-Type: application/json
```

#### Body Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Full name of the contact |
| `email` | string | Yes | Valid email address |
| `phone` | string | No | Phone number (optional) |
| `contactMethod` | string | No | Preferred contact method: `email`, `phone`, or `either` (default: `email`) |
| `message` | string | Yes | Contact message content |

#### Example Request

```json
{
  "name": "John Smith",
  "email": "john.smith@example.com",
  "phone": "0423 123 456",
  "contactMethod": "email",
  "message": "I'm interested in selling my property in Melbourne. Could you please contact me to discuss your services?"
}
```

### Response

#### Success Response (200)

```json
{
  "success": true,
  "message": "Thank you! Your message has been received.",
  "integrations": {
    "notion": true,
    "email": true
  }
}
```

#### Validation Error (400)

```json
{
  "error": "Missing required fields"
}
```

```json
{
  "error": "Invalid email format"
}
```

#### Server Error (500)

```json
{
  "error": "Internal server error"
}
```

### Integration Details

#### Notion Database Integration

**Environment Variables:**
- `NOTION_TOKEN`: Notion integration token
- `NOTION_DATABASE_ID`: Target database UUID

**Database Schema:**
- **Name** (Title): Contact's full name
- **Email** (Email): Contact's email address
- **Phone** (Phone Number): Contact's phone number
- **Contact Method** (Select): Preferred contact method
- **Message** (Rich Text): Message content
- **Status** (Select): Lead status (default: "New")
- **Submitted** (Date): Submission timestamp

**Error Handling:**
- Gracefully handles missing credentials
- Logs detailed error information
- Continues processing even if Notion fails

#### Email Notification Integration

**Environment Variables:**
- `RESEND_API_KEY`: Resend API key

**Email Configuration:**
- **From**: `website@lukefornieri.com.au`
- **To**: `luke.f@makrealty.com.au`
- **Subject**: `New Lead: {name} - Luke Fornieri Website`

**Email Template:**
```html
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> {name}</p>
<p><strong>Email:</strong> {email}</p>
<p><strong>Phone:</strong> {phone || 'Not provided'}</p>
<p><strong>Preferred Contact:</strong> {contactMethod}</p>
<p><strong>Message:</strong></p>
<p>{message}</p>
<hr>
<p><small>Submitted: {timestamp in Australian timezone}</small></p>
```

### Implementation Details

#### Validation

1. **Required Fields**: Validates presence of `name`, `email`, and `message`
2. **Email Format**: Uses regex pattern `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
3. **Data Sanitization**: Prevents XSS by treating all input as plain text

#### Error Handling

```typescript
// Graceful degradation example
const hasAnyIntegration = process.env.NOTION_TOKEN || process.env.RESEND_API_KEY;

if (!hasAnyIntegration) {
  return NextResponse.json({
    success: true,
    message: 'Thank you! Your message has been received. (Note: Integrations not configured)',
    integrations: { notion: false, email: false }
  });
}
```

#### Logging

The API provides comprehensive logging for debugging:

```typescript
console.log('Environment variables status:', {
  hasNotionToken: !!process.env.NOTION_TOKEN,
  hasNotionDatabaseId: !!process.env.NOTION_DATABASE_ID,
  hasResendApiKey: !!process.env.RESEND_API_KEY
});

console.log('Contact form submission processed:', {
  name: formData.name,
  email: formData.email,
  notionSuccess: !!notionResult,
  emailSuccess: !!emailResult,
  timestamp: new Date().toISOString()
});
```

### Testing

#### Local Testing

```bash
# Test with curl
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "0400 000 000",
    "contactMethod": "email",
    "message": "This is a test message"
  }'
```

#### Integration Testing

1. **Notion Integration**
   - Verify database permissions
   - Check property schema matches
   - Test with various data types

2. **Email Integration**
   - Verify sender domain authentication
   - Test email delivery
   - Check spam folder placement

#### Error Scenarios

1. **Missing Environment Variables**
   - API continues to function
   - Returns success with integration status
   - Logs warnings for missing credentials

2. **Invalid Notion Database ID**
   - Cleans database ID (removes query parameters)
   - Handles API errors gracefully
   - Logs detailed error information

3. **Email Delivery Failures**
   - Continues processing other integrations
   - Logs email API errors
   - Returns partial success status

### Security Considerations

1. **Input Validation**: All inputs are validated and sanitized
2. **Rate Limiting**: Consider implementing rate limiting for production
3. **CORS**: Next.js handles CORS automatically for API routes
4. **Environment Variables**: Sensitive credentials stored securely
5. **Error Messages**: Generic error messages to prevent information disclosure

### Performance

- **Response Time**: Typically < 2 seconds including external API calls
- **Concurrent Requests**: Handled by Vercel's serverless functions
- **Timeout Handling**: External API calls have built-in timeout handling
- **Memory Usage**: Minimal memory footprint with streaming responses

### Future Enhancements

1. **Rate Limiting**: Implement per-IP rate limiting
2. **Spam Protection**: Add CAPTCHA or honeypot fields
3. **Analytics**: Track form submission metrics
4. **Webhooks**: Add webhook support for third-party integrations
5. **File Uploads**: Support for property photos or documents