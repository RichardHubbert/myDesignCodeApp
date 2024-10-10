

import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useRouter } from "expo-router";




export default function CustomDrawerContent() {
    const router = useRouter();

    return <DrawerContentScrollView>
{/*         <DrawerItemList />
        <DrawerItemList label={'Logout'} onPress={() => router.replace('/')} /> */}
    </DrawerContentScrollView>
}