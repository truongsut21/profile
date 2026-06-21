/**
 * Custom hook để truy cập ngôn ngữ hiện tại và hàm dịch.
 *
 * Phải được sử dụng bên trong <LanguageProvider>.
 * Throw error rõ ràng nếu dùng ngoài Provider.
 */
import { useContext } from 'react';
import { LanguageContext, type LanguageContextValue } from '../common/LanguageContext';

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error(
      'useLanguage() must be used within a <LanguageProvider>. ' +
        'Wrap your app with <LanguageProvider> in main.tsx.',
    );
  }

  return context;
}
