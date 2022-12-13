import Profile from './Profile/Profile';
import user from './Profile/user.json';

import Statistic from './Statistics/Statistic';
import data from './Statistics/data.json';

import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistiry';
import transactionData from './TransactionHistory/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        key={user.username}
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistic title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      {/* <TransactionHistory items={transactions} /> */}
      <TransactionHistory items={transactionData}></TransactionHistory>
    </div>
  );
}
