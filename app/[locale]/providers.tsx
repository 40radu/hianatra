"use client"
import { I18nProviderClient } from '@/locales/client'
import React, { PropsWithChildren } from 'react'

function Providers(props: PropsWithChildren<{ locale: string }>) {
  const { locale, children } = props
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
}

export default Providers