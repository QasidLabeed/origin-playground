import gql from 'graphql-tag'
import fragments from '../../fragments'

export default gql`
  {
    web3 {
      defaultAccount {
        ...balanceFields
      }
      nodeAccounts {
        ...balanceFields
      }
      accounts {
        ...balanceFields
      }
    }
  }
  ${fragments.Account.balance}
`
