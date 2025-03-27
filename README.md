# @idrinth-api-bench/cli


## Contents

- [@idrinth-api-bench/cli](#idrinthapi-bench-cli)
  - [Contents](#contents)
  - [Set-Up](#set-up)
  - [What does this project do?](#what-does-this-project-do)
  - [Usage \& Examples](#usage--examples)
  - [License](#license)
  - [Socials](#socials)
  - [Support](#support)
  - [Privacy and Compliance](#privacy-and-compliance)

## [Issues](https://github.com/idrinth-api-bench/issues)

This is the issue repository for a typescript framework meant to performance test anything even remotely rest-like and related tools.

## Set-Up 

- Install dependencies with `npm ci` 
- Run the language file setup using `npm run language`

## What does this project do?

This project provides a CLI tool for @idrinth-api-bench/framework to generate code.

## Usage & Examples

### Creating a new benchmark project

1. Clone the repository:
```bash
git clone https://github.com/idrinth-api-bench/cli
```

2. Navigate to the directory:
```bash
cd  cli
```

3. Install the dependencies:
```bash
npm install
```

4. Generate language files:
```bash
npm run language
```

5. Create a new benchmark project: 
```bash
npx iabc
```

### Adding routes to new benchmark project

1. Go into the newly created project and create a new file at src/routes/main/first-test.ts. Fill it with the following example content:
```typescript
export default () => ({
    id: 'example test case',
    main: {
      method: 'get',
      url: 'https://reqres.in/api/users',
    },
    pre: [
      '^user-agent',
    ],
    post: [
      '^status-2xx',
    ],
  });
```

2. Run the benchmark:
```bash
cd benchmark
npm start
```

3. Please don't try to create a service denial scenario and keep the thread count low. Creating a service denial scenario could result in the machine or network resource to become unavailable to intended users. You can use flags to modify the threads and repetitions. The total amount of requests will be threads X repetitions. Eg. 4 threads X 25 repetitions = 100 requests total. 
```bash
npx iab bench --threads=4 --repetitions=25
```

Please have a look at the [website](https://idrinth-api-ben.ch) for more
information.

## License

As usual with my projects this is MIT-licensed.

## Socials

Additionally, to support requests via GitHub issue, you can reach us via

[![LinkedIn URL](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/groups/9588634/)&nbsp;&nbsp;&nbsp;&nbsp;[![Slack URL](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)](https://idrinth-api-bench.slack.com/join/shared_invite/zt-2f4zmw2sz-c3etHzCFq3LtZpkR15xXMA#/shared-invite/email)

## Support

Commercial support and training is provided via
[Björn Büttner](https://bjoern-buettner.me).

## Privacy and Compliance

The `@idrinth-api-bench` framework and its CLI do not collect any kind of
information about its users or the APIs being tested. All data is local to
the device you run it on or the database server you configure it to dump data
in.
