var requirements = {
  applicationName: 'SaberStocks',
  language: 'Scala',
  domain: 'Finance',
  frameworks: ['Akka', 'Play', 'Spark', 'SBT'],
  stories: [
    {
      story: 'High performance system',
      inOrderTo: 'Handle 25 millions transactions per second',
      asA: 'Stock Market System Context',
      iWantTo: 'Be a reactive system with responseive, resilient, elastic, and message-driven components'
      scenarios: [
        {
          scenario: 'A reactive system can be created using Akka',
          given: ['that the system is a stock market system', 'and has 1 million users'],
          then: ['it should complete any pending transactions within one minute']
        }
      ]
    },
  ]
};
