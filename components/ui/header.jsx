import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LayoutDashboard } from 'lucide-react';
import { PenBox } from 'lucide-react';
import { checkUser } from '@/lib/checkUser';
const Header = async() => {
  await checkUser();
  return (
    <div className="fixed top-0 w-full bg-white shadow-md z-50 flex items-center justify-between px- 8 py-2">
      <nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
      <Link href="/">
        <Image
          src="/Logo.png"
          alt="Spendthrift logo"
          height={80}
          width={80}
          className="h-auto w-auto object-contain"
        />
      </Link>
      <div className = "flex items-center space-x-4">
        <SignedIn>
          <Link href = {"/dashboard"}
          className = "text-gray-600 hover:text-blue-600 flex items-center gap-2">
          <Button variant = "outline">
            <LayoutDashboard size = {18}/>
            <span className = "hidden md:inline">Dashboard</span>  
            </Button>
            </Link>
            <Link href = {"/transaction/create"}
          className = "text-gray-600 hover:text-blue-600 flex items-center gap-2">
          <Button >
            <PenBox size = {18}/>
            <span className = "hidden md:inline">Add Transaction</span>  
            </Button>
            </Link>
        </SignedIn>
        <SignedOut>
          <SignInButton forceRedirectUrl='/dashboard'>
          <Button variant = "outline">Login</Button>
          </SignInButton>
         
        </SignedOut>
        <SignedIn>
          <UserButton appearance={{
            elements:{
              avatarBox: "w-10 h-10"
            },
          }}/>
        </SignedIn>
        </div>
      </nav>
      </div>
  );
};

export default Header;
