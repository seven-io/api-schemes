<img src="https://www.seven.io/wp-content/uploads/Logo.svg" width="250" />

# Official API Schemes for seven.io

[![MIT](https://img.shields.io/badge/License-MIT-teal.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/@seven.io/api-schemes)](https://www.npmjs.com/package/@seven.io/api-schemes)

This repository contains the official OpenAPI/Swagger definitions for seven.io's telecommunications API services, including SMS, TTS (Text-to-Speech), HLR (Home Location Register), MNP (Mobile Number Portability), and CNAM (Caller Name) services.

## 📋 Overview

The project maintains API schemas in both Swagger 2.0 and OpenAPI 3.0 formats, available in both JSON and YAML. All schemas are automatically generated from a master Swagger 2.0 definition to ensure consistency across formats.

### Available Services

- **SMS** - Send and receive SMS messages
- **TTS** - Text-to-Speech conversion
- **HLR** - Home Location Register lookups
- **MNP** - Mobile Number Portability checks
- **CNAM** - Caller Name identification

## 🚀 Quick Start

### Installation

```bash
npm install @seven.io/api-schemes
```

### Usage

The schemas are available in multiple formats:

```javascript
// Import JSON schemas
const openapi = require('@seven.io/api-schemes/json/openapi.json');
const swagger = require('@seven.io/api-schemes/json/swagger.json');

// Or reference YAML files
// yml/openapi.yml - OpenAPI 3.0 format
// yml/swagger.yml - Swagger 2.0 format (source of truth)
```

## 📁 Project Structure

```
├── yml/
│   ├── swagger.yml    # Master Swagger 2.0 definition (source of truth)
│   └── openapi.yml    # Generated OpenAPI 3.0 YAML
├── json/
│   ├── swagger.json   # Generated Swagger 2.0 JSON
│   └── openapi.json   # Generated OpenAPI 3.0 JSON
└── build.mts          # TypeScript build script
```

## 🛠️ Development

### Prerequisites

- Node.js >= 18.0.0
- npm

### Setup

```bash
git clone https://github.com/seven-io/api-schemes.git
cd api-schemes
npm install
```

### Building

```bash
npm run build
```

This command:
- Reads the master Swagger 2.0 definition from `yml/swagger.yml`
- Converts between Swagger 2.0 and OpenAPI 3.0 formats
- Validates all schemas using @apidevtools/swagger-parser
- Generates all output files in both JSON and YAML formats
- Applies consistent formatting with Prettier

### Workflow

1. **Make changes** to `yml/swagger.yml` (the source of truth)
2. **Run build** with `npm run build` to regenerate all formats
3. **Commit changes** - pre-commit hooks ensure the build passes

### Key Dependencies

- `swagger2openapi` - Converts Swagger 2.0 to OpenAPI 3.0
- `@apidevtools/swagger-parser` - Validates API definitions
- `yamljs` - YAML parsing and stringification
- `prettier` - Code formatting

## 📖 API Documentation

For detailed API documentation and interactive examples, visit:
- [seven.io API Documentation](https://www.seven.io/en/docs/gateway/api-docs/)
- [Developer Portal](https://www.seven.io/en/developers/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes to `yml/swagger.yml`
4. Run `npm run build` to regenerate all formats
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Support

Need help? Feel free to [contact us](https://www.seven.io/en/company/contact/) or [open an issue](https://github.com/seven-io/api-schemes/issues).
