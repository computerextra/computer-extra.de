import { useId } from "react"

const one = ["ı", "１", "𝟏", "𝟙", "𝟣", "𝟭", "𝟷"]
const two = ["Ƨ", "２", "𝟐", "𝟚", "𝟤", "𝟮", "𝟸"]
const three = [
  "Ʒ",
  "Ȝ",
  "З",
  "Ӡ",
  "Ⳍ",
  "Ꝫ",
  "Ɜ",
  "３",
  "𖼻",
  "𝈆",
  "𝟑",
  "𝟛",
  "𝟥",
  "𝟯",
  "𝟹",
]
const four = ["Ꮞ", "４", "𝟒", "𝟜", "𝟦", "𝟰", "𝟺"]
const five = ["Ƽ", "５", "𑢻", "𝟓", "𝟝", "𝟧", "𝟱", "𝟻"]
const six = ["б", "Ꮾ", "Ⳓ", "６", "𑣕", "𝟔", "𝟞", "𝟨", "𝟲", "𝟼"]
const seven = ["７", "𐓒", "𝈒", "𝟕", "𝟟", "𝟩", "𝟳", "𝟽"]
const eight = ["Ȣ", "ȣ", "৪", "８", "𐌚", "𝟖", "𝟠", "𝟪", "𝟴", "𝟾"]
const nine = ["৭", "੧", "୨", "൭", "Ⳋ", "Ꝯ", "９", "𝟗", "𝟡", "𝟫", "𝟵", "𝟿"]

const variants = [[], one, two, three, four, five, six, seven, eight, nine]

function hash(value: string) {
  let result = 0

  for (let i = 0; i < value.length; i++) {
    result = (result * 31 + value.charCodeAt(i)) >>> 0
  }

  return result
}

const exchangeNumber = (number: number, seed: number) => {
  const values = variants[number]
  return values[seed % values.length]
}

export default function useFormChallenge() {
  const id = useId()
  const seed = hash(id)

  const firstNumber = (seed % 9) + 1
  const secondNumber = (Math.floor(seed / 9) % 9) + 1

  const firstAscii = exchangeNumber(firstNumber, seed)
  const secondAscii = exchangeNumber(secondNumber, seed)

  const result = firstNumber + secondNumber

  const CheckResult = (res: string) => Number(res) === result

  return { firstAscii, secondAscii, CheckResult }
}
