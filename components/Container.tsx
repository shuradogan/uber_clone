import { View ,Text} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

interface Props{
    children:React.ReactNode;
    className?: string;
}

const Container = ({children,className}:Props) => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
        <View style={[tw`p-5`,className ?tw`${className}`:null]}>
            {children}
        </View>
    </SafeAreaView>
  );
};

export default Container