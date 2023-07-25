import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
import { Moon } from 'lucide-react';
const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    // Call your function to apply the theme based on the newTheme value
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div onClick={toggleTheme} className='cursor-pointer mt-1'>
      {theme === 'dark' ? <BiSun size={24} /> :<Moon size={24} />}
    </div>
  );
};

export default ThemeChanger;
