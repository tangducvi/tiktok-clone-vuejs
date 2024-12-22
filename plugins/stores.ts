import {useUserStore} from '~/stores/user'
import {useProfileStore} from '~/stores/profile'
import {useGeneralStore} from '~/stores/general'

export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            userStore: useUserStore(),
            generalStore: useGeneralStore(),
            profileStore: useProfileStore()
        }
    }
})

// const { $userStore } = useNuxtApp(); 