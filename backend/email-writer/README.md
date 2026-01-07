# AI Email Writer (Backend)

A Spring Boot application that leverages Google's Gemini AI to generate professional email replies based on original email content and specified tone.

## Features

- **AI-Powered Email Generation**: Uses Google's Gemini AI to create contextually appropriate email responses
- **Tone Customization**: Supports different tones (professional, casual, formal, etc.) for email replies
- **RESTful API**: Simple REST endpoint for email generation
- **Reactive Programming**: Built with Spring WebFlux for non-blocking operations

## Prerequisites

- Java 24
- Maven 3.6+
- Google Gemini API Key

## Configuration

Set the following environment variables:

```bash
export GEMINI_URL="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key="
export GEMINI_KEY="your-gemini-api-key-here"
```

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Configure environment variables as mentioned above
4. Run the application:

```bash
./mvnw spring-boot:run
```

Or build and run the JAR:

```bash
./mvnw clean package
java -jar target/email-writer-0.0.1-SNAPSHOT.jar
```

## API Usage

### Generate Email Reply

**Endpoint:** `POST /api/email/generate`

**Request Body:**
```json
{
  "emailContent": "Original email content here...",
  "tone": "professional"
}
```

**Response:**
```json
"Generated email reply content..."
```

**Example Request:**
```bash
curl -X POST http://localhost:8080/api/email/generate \
  -H "Content-Type: application/json" \
  -d '{
    "emailContent": "Dear Team,\n\nI hope this email finds you well. I wanted to follow up on the project status.\n\nBest regards,\nJohn",
    "tone": "professional"
  }'
```

## Project Structure

```
src/
├── main/
│   ├── java/com/email/writer/
│   │   ├── EmailRequest.java          # Request DTO
│   │   ├── EmailWriterApplication.java # Main Spring Boot application
│   │   ├── controller/
│   │   │   └── EmailGeneratorController.java # REST controller
│   │   └── service/
│   │       └── EmailGeneratorService.java   # Business logic service
│   └── resources/
│       └── application.properties     # Application configuration
└── test/
    └── java/com/email/writer/
        └── EmailWriterApplicationTests.java # Unit tests
```

## Dependencies

- Spring Boot 3.4.4
- Spring WebFlux
- Lombok
- Jackson (for JSON processing)

## Development

### Running Tests

```bash
./mvnw test
```

### Building the Project

```bash
./mvnw clean compile
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if necessary
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.