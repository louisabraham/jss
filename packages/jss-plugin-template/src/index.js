// @flow
import {type Plugin} from 'jss'
import parse from './parse'

const onProcessRule = rule => {
  if (typeof rule.style === 'string') {
    rule.style = parse(rule.style)
  }
}

export default function templatePlugin(): Plugin {
  return {onProcessRule}
}
