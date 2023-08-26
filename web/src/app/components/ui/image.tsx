import { ICustomComponentProps } from 'types/interfaces'
import { mergeClassName } from 'utils/format'

interface IProps extends ICustomComponentProps {
  src: string
}

export default function Image(props: IProps) {
  return (
    <div className={mergeClassName("bg-primary h-full w-full rounded-lg overflow-hidden", props.className)}>
      <img src={props.src} className="min-h-[200px] w-full h-full object-cover" />
    </div>
  )
}
