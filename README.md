

# Pivotal Tracker CLI

Pivotal Tracker is outstanding task management service. So, in order to make it easier to use, I made a CLI.

## Installation

`
npm install pivotal-tracker-cli -g
`

and if you want to skip to input project id and token as cli arguments,

`
export PIVOTAL_TRACKER_DEFAULT_PROJECT_ID=*******.
export PIVOTAL_TRACKER_TOKEN=*******.
`

## Usage

### Showing List

`
$ pvt list --project-id 123456 --token *********************
10000001 1 started     enable to finish subcommand
10000002 1 accepted    write API document
10000003 3 unscheduled write test cases
`

You can cut of project id option and token option when you set these value as environment variables.

### Showing Task

`
$ pvt show 10000001
10000001 1 started     enable to finish subcommand
`

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT License
