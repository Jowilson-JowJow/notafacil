
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroScreen from './screens/CadastroScreen';
import ListagemScreen from './screens/ListagemScreen';
import type { RootStackParamList } from './types';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Listagem" component={ListagemScreen} />
          <Stack.Screen name="Cadastro" component={CadastroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

