import { useEffect, useEffectEvent, useState } from "react"

const One = ["ı", "１", "𝟏", "𝟙", "𝟣", "𝟭", "𝟷"]
const Two = ["Ƨ", "２", "𝟐", "𝟚", "𝟤", "𝟮", "𝟸"]
const Three = [
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
const Four = ["Ꮞ", "４", "𝟒", "𝟜", "𝟦", "𝟰", "𝟺"]
const Five = ["Ƽ", "５", "𑢻", "𝟓", "𝟝", "𝟧", "𝟱", "𝟻"]
const Six = ["б", "Ꮾ", "Ⳓ", "６", "𑣕", "𝟔", "𝟞", "𝟨", "𝟲", "𝟼"]
const Seven = ["７", "𐓒", "𝈒", "𝟕", "𝟟", "𝟩", "𝟳", "𝟽"]
const Eight = ["Ȣ", "ȣ", "৪", "８", "𐌚", "𝟖", "𝟠", "𝟪", "𝟴", "𝟾"]
const Nine = ["৭", "੧", "୨", "൭", "Ⳋ", "Ꝯ", "９", "𝟗", "𝟡", "𝟫", "𝟵", "𝟿"]

// eslint-disable-next-line react-refresh/only-export-components
const ExchangeNumber = (n: number): string => {
  switch (n) {
    case 1:
      return One[Math.floor(Math.random() * One.length)]
    case 2:
      return Two[Math.floor(Math.random() * Two.length)]
    case 3:
      return Three[Math.floor(Math.random() * Three.length)]
    case 4:
      return Four[Math.floor(Math.random() * Four.length)]
    case 5:
      return Five[Math.floor(Math.random() * Five.length)]
    case 6:
      return Six[Math.floor(Math.random() * Six.length)]
    case 7:
      return Seven[Math.floor(Math.random() * Seven.length)]
    case 8:
      return Eight[Math.floor(Math.random() * Eight.length)]
    case 9:
      return Nine[Math.floor(Math.random() * Nine.length)]
  }
  return ""
}

export default function useFormChallenge() {
  const [firstNumber, setFirstNumber] = useState<number | undefined>(undefined)
  const [secondNumber, setSecondNumber] = useState<number | undefined>(
    undefined
  )

  const [firstAscii, setFirstAscii] = useState<string | undefined>(undefined)
  const [secondAscii, setSecondAscii] = useState<string | undefined>(undefined)

  const [result, setResult] = useState(0)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFirstNumber(Math.floor(Math.random() * 9) + 1)
    setSecondNumber(Math.floor(Math.random() * 9) + 1)
  }, [])

  const generateChallenge = useEffectEvent((first: number, second: number) => {
    setResult(first + second)
    setFirstAscii(ExchangeNumber(first))
    setSecondAscii(ExchangeNumber(second))
  })

  useEffect(() => {
    if (firstNumber && secondNumber)
      // eslint-disable-next-line react-hooks/set-state-in-effect
      generateChallenge(firstNumber, secondNumber)
  }, [firstNumber, secondNumber])

  const CheckResult = (res: string) => {
    const n = Number(res)
    if (n === result) {
      return true
    } else {
      return false
    }
  }

  return { firstAscii, secondAscii, CheckResult }
}
