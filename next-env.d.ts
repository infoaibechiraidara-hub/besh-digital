declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPABASE_URL: string;
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
      SUPABASE_SERVICE_ROLE_KEY: string;
      CINETPAY_API_KEY: string;
      CINETPAY_SITE_ID: string;
      CINETPAY_TRANSACTION_KEY: string;
      CINETPAY_WAN_ENV: string;
      PAYPAL_CLIENT_ID: string;
      PAYPAL_CLIENT_SECRET: string;
      PAYPAL_WEBHOOK_ID: string;
      RESEND_API_KEY: string;
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;
    }
  }
}

declare module '*.css' {
  const content: string;
  export default content;
}

declare module '*://*.supabase.co/*' {
  const value: string;
  export default value;
}