import { SiGmail } from "react-icons/si"

interface GmailLinkProps {
  address: string
}

export const GmailLink = (props: GmailLinkProps) => {

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error('Failed to copy!', err)
    }
  }

  const positionConfig: string[] = [
    'flex',
    'items-center',
    'justify-center',
    'bg-teal-400',
  ]

  const cursorConfig: string[] = [
    'p-1.5',
    'cursor-pointer',
    'hover:bg-teal-200',
    'duration-300',
    'rounded-full',
  ]

  return (
    <>
      <div className={positionConfig.join(' ')}>
        <button onClick={() => copyToClipboard(props.address)}>
          <div className={cursorConfig.join(' ')}>
            <SiGmail />
          </div>
        </button>
      </div>
    </>
  )
}
