import { useMutation } from '@tanstack/react-query';
import auth from '@react-native-firebase/auth';
import { UserAuth } from '../../features/hooks/use-auth';
import { MUTATION_KEYS } from '../keys';
import { LoginFormData } from '../../screen/login-screen';


export const useLoginMutation = () => {
    const { setTokenAction } = UserAuth();

    const mutation = useMutation({
        mutationKey: MUTATION_KEYS.Login,
        mutationFn: async (data: LoginFormData) => {
            try {
                const userCredential = await auth().signInWithEmailAndPassword(
                    data.email,
                    data.password,
                );

                const idToken = await userCredential.user.getIdToken();
                setTokenAction(idToken || '');

            } catch (error) {
                console.error('Error signing user: ', error);
            }

        },
    });

    return {
        ...mutation,
    };
};
