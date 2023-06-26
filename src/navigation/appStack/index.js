import { createStackNavigator } from '@react-navigation/stack';
import { InfoView, InvestorList } from '../../screens';
import { INFO_VIEW, INVESTOR_LIST } from '../routes';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={INVESTOR_LIST} component={InvestorList} />
      <Stack.Screen name={INFO_VIEW} component={InfoView} />
    </Stack.Navigator>
  );
};
