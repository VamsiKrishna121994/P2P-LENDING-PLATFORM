import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-lg">
      <ul className="flex flex-wrap justify-around">
        <li><Link href="/"><a>Overview</a></Link></li>
        <li><Link href="/transactions"><a>Transactions</a></Link></li>
        <li><Link href="/scheduled-transactions"><a>Scheduled Transactions</a></Link></li>
        <li><Link href="/accounts"><a>Accounts</a></Link></li>
        <li><Link href="/credit-cards"><a>Credit Cards</a></Link></li>
        <li><Link href="/budgets"><a>Budgets</a></Link></li>
        <li><Link href="/debts"><a>Debts</a></Link></li>
        <li><Link href="/chart"><a>Chart</a></Link></li>
        <li>
          <Link href="/calendar">Calendar</Link>
        </li>
        <li><Link href="/import-export"><a>Import/Export</a></Link></li>
        <li><Link href="/preferences"><a>Preferences</a></Link></li>
        <li><Link href="/settings"><a>Settings</a></Link></li>
        <li><Link href="/help"><a>Help</a></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;