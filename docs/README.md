@opensearch-project/opensearch-dashboards-sdk / [Modules](modules.md)

# OpenSearch Dashboards SDK for JS

- [Introduction](#introduction)
- [Contributing](#contributing)
- [Developer Guide](#developer-guide)
- [Design](#design)
- [Maintainers](#maintainers)
- [Code of Conduct](#code-of-conduct)
- [License](#license)
- [Copyright](#copyright)

## Introduction
OpenSearch Dashboards plugins have allowed the extension and enhancements of various core features however, current plugin architecture carries the risk of fatally impacting clusters should they fail. In order to ensure that plugins may run safely without impacting the system, our goal is to effectively isolate plugin interactions with OpenSearch Dashboards by modularizing the extension points to which they hook onto.

## Contributing
See [CONTRIBUTING](CONTRIBUTING.md)

## Developer Guide
* Clone this project
* Run `yarn`
* Within OpenSearch Dashboards, run `yarn add link:${path to this repo}/opensearch-dashboards-sdk-js --dev`

## Design
TODO

## Maintainers
See [MAINTAINERS](MAINTAINERS.md)

## Code of Conduct

This project has adopted the [Amazon Open Source Code of Conduct](CODE_OF_CONDUCT.md). For more information see the [Code of Conduct FAQ](https://aws.github.io/code-of-conduct-faq), or contact [opensource-codeofconduct@amazon.com](mailto:opensource-codeofconduct@amazon.com) with any additional questions or comments.

## License

This project is licensed under the [Apache v2.0 License](LICENSE).

## Copyright

Copyright OpenSearch Contributors. See [NOTICE](NOTICE) for details.
