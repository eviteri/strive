const breaks: Record<string, string> = {
  huge: '1440px',
  regular: '1200px',
  large: '1024px',
  medium: '768px',
  small: '480px'
}

const less: Record<string, string> = {
  lessThanHuge: `(max-width: ${breaks.huge})`,
  lessThanRegular: `(max-width: ${breaks.regular})`,
  lessThanLarge: `(max-width: ${breaks.large})`,
  lessThanMedium: `(max-width: ${breaks.medium})`,
  lessThanSmall: `(max-width: ${breaks.small})`
}

const great: Record<string, string> = {
  greaterThanHuge: `(min-width: ${breaks.huge})`,
  greaterThanRegular: `(min-width: ${breaks.regular})`,
  greaterThanLarge: `(min-width: ${breaks.large})`,
  greaterThanMedium: `(min-width: ${breaks.medium})`,
  greaterThanSmall: `(min-width: ${breaks.small})`
}

const createBetween = (start: string, stop: string): string =>
  `${great[`greaterThan${start}`]} and ${less[`lessThan${stop}`]}`

const between: Record<string, string> = {
  betweenSmallMedium: createBetween('small', 'medium'),
  betweenMediumLarge: createBetween('medium', 'large'),
  betweenLargeHuge: createBetween('large', 'huge')
}

const exportObj = { ...less, ...great, ...between, ...breaks }

export default exportObj
