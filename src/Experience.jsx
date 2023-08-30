import { Light } from "three"
import Environment from "./Environment"
import Lights from "./Lights"
import TestObj from "./TestObj"

export default function Experience()
{
    return <>
        <Environment />
        <Lights />
        <TestObj />
    </>
}