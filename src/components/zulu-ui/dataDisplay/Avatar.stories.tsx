import * as  React from  'react'
import {withKnobs} from '@storybook/addon-knobs'
import { ZuluAvatar } from './Avatar'

export default {title: 'Zentake Design Language|Atoms/Data Display/Avatar', decorators: [withKnobs]}

export const avatar = () => {

  return <ZuluAvatar displayText="SS"/>
}
