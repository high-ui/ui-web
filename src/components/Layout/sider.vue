<template>
    <div 
        :class="wrapClasses" 
        :style="wrapStyles">
        <div :class="titleClass" v-show="showTitle">
            <span v-if="collapsible" @click="toggleCollapse">
                <iui-aweicon :name="iconName" :class="titleIconClass"></iui-aweicon>
            </span>
            <span :class="titleTextClass">{{title}}</span>
        </div>
        <div :class="childClasses">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import { on, off } from '../../utils/dom';
    import { oneOf /*, dimensionMap, setMatchMedia*/ } from '../../utils/assist';
    const prefixCls = 'ivu-layout-sider';
    // setMatchMedia();
    export default {
        name: 'Sider',
        props: {
            value: {  // if it's collpased now
                type: Boolean,
                default: false
            },
            title: {
                type: String
            },
            align: {
                type: String,
                default: "left",
                validator (val) {
                    return oneOf(val, ['left', 'right']);
                }
            },
            width: {
                type: [Number, String],
                default: 200
            },
            showTitle: {
                type: Boolean,
                default: true
            },
            collapsible: {
                type: Boolean,
                default: false
            },
            defaultCollapsed: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                isCollapsed: false
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}`,
                    this.isCollapsed ? `${prefixCls}-collapsed` : ''
                ];
            },
            wrapStyles () {
                return {
                    width: `${this.siderWidth}px`,
                    minWidth: `${this.siderWidth}px`,
                    maxWidth: `${this.siderWidth}px`,
                    flex: `0 0 ${this.siderWidth}px`
                };
            },
            titleClass () {
                return `${prefixCls}-title-${this.align}`;
            },
            titleIconClass () {
                return `${prefixCls}-title-${this.align}-icon`;
            },
            titleTextClass () {
                return `${prefixCls}-title-${this.align}-text`;
            },
            childClasses () {
                return [
                        `${this.prefixCls}-children`,
                        this.showTitle? '' : `${this.prefixCls}-children-full`
                    ];
            },
            siderWidth () {
                return this.collapsible ? (this.isCollapsed ? 26 : parseInt(this.width)) : this.width;
            },
            iconName() {
                if(this.align == 'left') {
                    return this.isCollapsed ? 'angle-double-right' :'angle-double-left';
                } else {
                    return this.isCollapsed ? 'angle-double-left' :'angle-double-right';
                }
            }
        },
        methods: {
            toggleCollapse () {
                this.isCollapsed = !this.isCollapsed;
                this.$emit('input', this.isCollapsed);
                this.$emit('on-collapse', this.isCollapsed);
            }
        },
        mounted () {
            if (this.defaultCollapsed && this.showTitle) {
                this.isCollapsed = true;
            }
            // if (this.defaultCollapsed) {
            //     this.isCollapsed = true;
            //     this.$emit('input', this.defaultCollapsed);
            // } else {
            //     if (this.value !== undefined) {
            //         this.isCollapsed = this.value;
            //     }
            // }
        }
    };
</script>