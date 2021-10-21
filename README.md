# Barista Companion App
 This app aims to be the coffee connoisseur's friend. There is something magical about enjoying a new blend, but nothing is worse than brewing a bad cup. With this app you can record any minor changes you make to a recipe and identify what aspect of the recipe needs to change, Maybe the coffee to water ratio is off or you need to grind the beans finer. Add and compare different ways to brew!

## Features
-Add Roasters, Coffee Beans, Recipes, and Brew Methods. 

This React/Redux App uses a Rails API for the backend. (https://github.com/David-P-Molina/Barista-Companion-API)

## Installation

### Clone the repository
#### Frontend
```shell
git clone https://github.com/David-P-Molina/Barista-Companion-App
cd barista-companion-app
```
#### Backend
```shell
git clone https://github.com/David-P-Molina/Barista-Companion-API
```
## Starting The Application
### Install dependencies
For Ruby installation instructions visit 
https://www.ruby-lang.org/en/documentation/installation/

#### Backend
And then execute :

    $ bundle install
### Initialize the database

```shell
rails db:create
rails db:migrate
rails db:seed
```
### Starting The API
type:
```shell
rails server 
```
#### Frontend
In terminal execute:
```shell
 $ npm start
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/David-P-Molina/Barista-Companion-App. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/David-P-Molina/Barista-Companion-App/CODE_OF_CONDUCT.md).

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Strange Conversion Calculator's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/David-P-Molina/Barista-Companion-App/blob/main/CODE_OF_CONDUCT.md).