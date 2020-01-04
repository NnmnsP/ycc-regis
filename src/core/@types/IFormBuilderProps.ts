export interface IFormBuilderProps {
  form: (
    | {
        type: 'text' | 'textarea'
        name: string
        placeholder: string
        isRequired: boolean
        props?: any
      }
    | {
        type: 'select'
        name: string
        placeholder: string
        isRequired: boolean
        props?: any
        options: {
          [key: string]: string
        }
      }
  )[][][]
  formik: any
}
