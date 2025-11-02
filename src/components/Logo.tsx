import Image from 'next/image'
import logoTlahtolli from '@/images/logos/tlahtolli.svg'

export function Logo(props: React.ComponentPropsWithoutRef<'img'>) {
  return (
    <Image
      src={logoTlahtolli}
      alt="Logo"
      width={170}
      unoptimized
    />
  )
}