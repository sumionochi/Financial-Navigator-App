export type Transaction = {
    id: number;
    destination: string;
    amount: string;
    time: string;
    card: string;
  };
  
  export type Account = {
    id: number;
    currency: string;
    balance: string;
    accountNumber: string;
    validThru: string;
    backgroundColor: string;
  };
  
  export const initialAccounts: Account[] = [
    {
      id: 1,
      currency: 'US Dollar',
      balance: '$40,500.80',
      accountNumber: '**** 9934',
      validThru: '05/28',
      backgroundColor: '#E8F4FE',
    },
    {
      id: 2,
      currency: 'Euro',
      balance: '€30,200.75',
      accountNumber: '**** 5678',
      validThru: '12/27',
      backgroundColor: '#FEE8E8',
    },
    {
      id: 3,
      currency: 'British Pound',
      balance: '£25,100.65',
      accountNumber: '**** 4321',
      validThru: '08/29',
      backgroundColor: '#E8FEEC',
    },
    {
      id: 4,
      currency: 'Japanese Yen',
      balance: '¥3,450,000',
      accountNumber: '**** 7890',
      validThru: '03/30',
      backgroundColor: '#F4E8FE',
    }
  ];
  