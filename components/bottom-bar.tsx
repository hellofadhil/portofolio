'use client';
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLanguage = (newLocale: string) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(new RegExp(`^/${locale}`), '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      {/* ... (kode sebelumnya tetap sama) ... */}

      {/* Mode Toggle */}
      <DockIcon>
        <Tooltip>
          <TooltipTrigger asChild>
            <ModeToggle />
          </TooltipTrigger>
          <TooltipContent>
            <p>{t('theme')}</p>
          </TooltipContent>
        </Tooltip>
      </DockIcon>

      {/* Language Switcher */}
      <DockIcon>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => changeLanguage('en')}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "size-12"
              )}
            >
              EN
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t('english')}</p>
          </TooltipContent>
        </Tooltip>
      </DockIcon>

      <DockIcon>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => changeLanguage('id')}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "size-12"
              )}
            >
              ID
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t('indonesian')}</p>
          </TooltipContent>
        </Tooltip>
      </DockIcon>
    </div>
  );
}