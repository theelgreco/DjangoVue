declare module "@jamescoyle/vue-icon" {
    import {defineComponent} from "vue";

    export interface IconProps {
        path: string
        type?: string
        size?: string
        viewbox?: string
        flip?: string
        rotate?: string
    }

    const SvgIcon: defineComponent<IconProps>
    export default SvgIcon
}