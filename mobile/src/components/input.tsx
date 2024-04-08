import { colors } from "@/styles/colors"
import { ReactNode } from "react"
import { TextInput, View, TextInputProps } from "react-native"

function Input({children}: {children: ReactNode}){
    return(
        <View className="w-full h-14 flex-row items-center gap-3 p-3 border border-green-400 rounded-lg">
            {children}
        </View>
    )
}

function Field({...rest}: TextInputProps){
    return (
        <TextInput 
            className="flex-1 text-while text-base font-regular color-white"
            placeholderTextColor={colors.gray[200]}
            {...rest}
        />
    )
}

Input.Field = Field

export { Input }