import type { EditorProps } from 'draft-js'
import type { IFieldProps } from '../../field/interface/field.interface'

type TypeEditorPropsField = EditorProps & IFieldProps

export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
	onChange: (...event: any[]) => void
	value?: string | null
}
