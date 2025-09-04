

import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import { useTranslations } from 'next-intl';

export default function HomePage() {
    const t = useTranslations('home');
    const contact = useTranslations('contact');



  return (
    <main className="p-6">
      <LanguageSwitcher/>
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p className="mt-2">{t('description')}</p>
        {contact("title")}
    </main>
  );
}