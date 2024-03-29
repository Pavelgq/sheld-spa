import cn from 'classnames'
import styles from "./TextArea.module.css"
import { TextAreaProps } from './Textarea.props'

export const TextArea = ({className, ...props}: TextAreaProps ): JSX.Element => {
  return (
    <textarea className={cn(className, styles.textArea)} {...props} />
  )
}