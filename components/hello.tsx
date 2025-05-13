'use client'
import { AuroraText } from "@/components/ui/aurora-text";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslations } from 'next-intl';

export function Hello() {
  const t = useTranslations('Hello');

  return (
    <Card className="mx-auto h-auto w-full max-w-2xl rounded-xl flex flex-col sm:flex-row justify-between items-center p-6 gap-4">
      <div className="sm:hidden flex justify-center">
        <Avatar className="h-[80px] w-[80px] border">
          <AvatarImage src="https://github.com/shadcn.png" alt="Fadhil Rabbani" />
          <AvatarFallback>FR</AvatarFallback>
        </Avatar>
      </div>
      <div className="text-center sm:text-left">
        <h1 className="font-bold tracking-tighter text-3xl sm:text-4xl">
          {t('greeting', { name: <AuroraText>Fadhil!</AuroraText> })}
        </h1>
        <p className="text-sm text-muted-foreground">
          {t('description')}
        </p>
      </div>
      <div className="hidden sm:block">
        <Avatar className="h-[80px] w-[80px] border">
          <AvatarImage src="https://github.com/shadcn.png" alt="Fadhil Rabbani" />
          <AvatarFallback>FR</AvatarFallback>
        </Avatar>
      </div>
    </Card>
  );
}