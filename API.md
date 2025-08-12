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

### Development & Testing

#### Local Development Setup

1. **Environment Variables**
   ```bash
   # Copy example environment file
   cp .env.example .env.local
   
   # Add your API keys
   NOTION_TOKEN=your_notion_integration_token
   NOTION_DATABASE_ID=your_notion_database_id
   RESEND_API_KEY=your_resend_api_key
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Test API Endpoint**
   ```bash
   curl -X POST http://localhost:3000/api/contact \
     -H "Content-Type: application/json" \
     -d @test-payload.json
   ```

#### Integration Status Monitoring

The API provides detailed logging for monitoring integration health:

```typescript
// Example log output
{
  "timestamp": "2024-11-08T10:30:00.000Z",
  "level": "info",
  "message": "Contact form submission processed",
  "data": {
    "name": "John Smith",
    "email": "john.smith@example.com",
    "notionSuccess": true,
    "emailSuccess": true,
    "processingTime": "1.2s"
  }
}
```

## Form Tracking API

### Endpoint

`POST /api/form-track`

### Description

Tracks form submissions for analytics and lead management with Discord notification integration. Used primarily for PDF guide downloads and user behavior tracking.

### Request

#### Headers
```
Content-Type: application/json
```

#### Body Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event` | string | Yes | Event type: `buyer_guide_request` or `seller_guide_request` |
| `firstName` | string | Yes | Contact's first name |
| `lastName` | string | Yes | Contact's last name |
| `email` | string | Yes | Valid email address |
| `address` | string | No | Property address (seller forms only) |
| `guide` | string | Yes | Guide type: `buying-real-estate-guide` or `selling-2025-guide` |
| `path` | string | Yes | Current page path where form was submitted |

#### Example Request

```json
{
  "event": "buyer_guide_request",
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane.smith@example.com",
  "guide": "buying-real-estate-guide",
  "path": "/"
}
```

```json
{
  "event": "seller_guide_request",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "address": "123 Collins Street, Melbourne VIC 3000",
  "guide": "selling-2025-guide",
  "path": "/"
}
```

### Response

#### Success Response (204)

```
204 No Content
```

The endpoint returns no content on success, indicating the tracking was logged successfully.

#### Server Error (500)

```json
{
  "error": "Internal server error"
}
```

### Discord Integration

#### Environment Variables
- `DISCORD_WEBHOOK_URL`: Discord webhook URL for notifications

#### Discord Notification Format

The API sends rich embed notifications to Discord with the following structure:

```json
{
  "embeds": [
    {
      "title": "🏠 New Buyer Guide Request",
      "color": 65280,
      "fields": [
        {
          "name": "👤 Name",
          "value": "Jane Smith",
          "inline": true
        },
        {
          "name": "📧 Email", 
          "value": "jane.smith@example.com",
          "inline": true
        },
        {
          "name": "📋 Guide",
          "value": "Buying Real Estate Guide",
          "inline": true
        }
      ],
      "timestamp": "2024-12-08T10:30:00.000Z",
      "footer": {
        "text": "Real Estate Lead"
      }
    }
  ]
}
```

#### Features

- **Rich Embeds**: Formatted notifications with colors and structured fields
- **Event Formatting**: Automatic text formatting with proper capitalization using TypeScript-compliant string manipulation
- **Conditional Fields**: Property address field only shown for seller requests
- **Timestamps**: Automatic ISO timestamp for tracking
- **Error Handling**: Graceful failure if Discord webhook is unavailable
- **Type Safety**: Full TypeScript compliance with explicit type annotations for all string operations

### Implementation Details

#### Logging

All form submissions are logged to console for analytics:

```typescript
console.log("[FORM_SUBMIT]", {
  at: new Date().toISOString(),
  event: "buyer_guide_request",
  firstName: "Jane",
  lastName: "Smith",
  email: "jane.smith@example.com",
  guide: "buying-real-estate-guide",
  path: "/"
});
```

#### Error Handling

```typescript
// Discord notification error handling with TypeScript compliance
try {
  await fetch(process.env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      embeds: [{
        title: `🏠 New ${body.event.replace('_', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}`,
        // ... rest of embed structure
      }]
    })
  });
} catch (discordError) {
  console.error("[DISCORD_NOTIFICATION_ERROR]", discordError);
  // Form tracking continues even if Discord fails
}
```

### Testing

#### Local Testing

```bash
# Test buyer guide request
curl -X POST http://localhost:3000/api/form-track \
  -H "Content-Type: application/json" \
  -d '{
    "event": "buyer_guide_request",
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "guide": "buying-real-estate-guide",
    "path": "/"
  }'

# Test seller guide request
curl -X POST http://localhost:3000/api/form-track \
  -H "Content-Type: application/json" \
  -d '{
    "event": "seller_guide_request",
    "firstName": "Test",
    "lastName": "User", 
    "email": "test@example.com",
    "address": "123 Test Street, Melbourne",
    "guide": "selling-2025-guide",
    "path": "/"
  }'
```

### Security Considerations

1. **No Persistent Storage**: Data is only logged, not stored permanently
2. **Graceful Degradation**: Continues operation even if Discord integration fails
3. **Input Sanitization**: All inputs are treated as plain text
4. **Rate Limiting**: Consider implementing for production use

### Future Enhancements

1. **Rate Limiting**: Implement per-IP rate limiting with Redis
2. **Spam Protection**: Add CAPTCHA or honeypot fields
3. **Analytics**: Track form submission metrics and conversion rates
4. **Webhooks**: Add webhook support for third-party CRM integrations
5. **File Uploads**: Support for property photos or documents
6. **A/B Testing**: Form variant testing for optimization
7. **Lead Scoring**: Automatic lead qualification based on form data
8. **Multiple Notification Channels**: Support for Slack, Teams, or email notifications alongside Discord