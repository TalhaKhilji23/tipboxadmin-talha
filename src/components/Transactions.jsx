import React from 'react';
import TransactionComponent from './TransactionComponent';

const transactionData = [
  {
    id: 1,
    name: '大隈康之',
    date: '12/02/2021',
    transactionId: '123456789',
    amount: 'Rs 500',
    profileImage: 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png'
  },
  {
    id: 1,
    name: '大隈康之',
    date: '12/02/2021',
    transactionId: '123456789',
    amount: 'Rs 500',
    profileImage: 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png'
  },
  {
    id: 1,
    name: '大隈康之',
    date: '12/02/2021',
    transactionId: '123456789',
    amount: 'Rs 500',
    profileImage: 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png'
  },
  {
    id: 1,
    name: '大隈康之',
    date: '12/02/2021',
    transactionId: '123456789',
    amount: 'Rs 500',
    profileImage: 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png'
  },
  // Add more transaction objects here
];

export default function Transactions() {
  return (
    <div className='p-6 bg-white rounded-[20px] h-[382px] w-[686px] mb-20'>
      <div className='flex justify-between'>
        <p className='font-medium text-xl'>Transactions</p>
        <div className='bg-[#FFECEC] rounded-[5px] w-[62px] h-[30px] flex justify-center items-center'>
          <p className='text-sm'>See all</p>
        </div>
      </div>
      <div className='flex justify-between bg-[#F6F6F6] mt-6 px-6 h-[44px] w-[638px] rounded-[5px]'>
        <p className='text-[#505050] text-sm mt-[12px]'>Name</p>
        <div className='flex gap-24 mt-[12px] text-[#505050]'>
          <p className='text-sm'>Date</p>
          <p className='text-sm'>Transaction Id</p>
          <p className='text-sm'>Amount</p>
        </div>
      </div>
      <div className='p-6'>
        {transactionData.map(transaction => (
          <TransactionComponent
            key={transaction.id}
            name={transaction.name}
            date={transaction.date}
            transactionId={transaction.transactionId}
            amount={transaction.amount}
            profileImage={transaction.profileImage}
          />
        ))}
      </div>
    </div>
  );
}
