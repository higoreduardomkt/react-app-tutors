import { ICustomComponentProps } from 'types/interfaces'
import { mergeClassName } from 'utils/format'

export default function Container(props: ICustomComponentProps) {
  return (
    <section
      className={mergeClassName(
        'px-6 py-3 max-w-screen-2xl mx-auto',
        props.className
      )}
    >
      {props.children}
    </section>
  )
}
