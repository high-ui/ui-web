<template>
	<div class="iui-layout" ref="layout" v-cloak>
		<div v-if="left" class="iui-layout-left" :class="{'iui-layout-pane-closed': leftClosed}" :style="{height: leftRightHeight +'px', width: leftW + 'px'}">
			<div class="iui-layout-left-title">
				<span @click="collapseLeft">
					<iui-aweicon v-show="!leftClosed" name="angle-double-left" class="iui-layout-left-icon"></iui-aweicon>
					<iui-aweicon v-show="leftClosed" name="angle-double-right" class="iui-layout-left-icon"></iui-aweicon>
				</span>
				<span class="iui-layout-pane-title">{{leftTitle}}</span>
			</div>
			<div class="iui-layout-left-content">
				<slot name="left"></slot>
			</div>
		</div>
		<div v-if="right" class="iui-layout-right"  :class="{'iui-layout-pane-closed': rightClosed}" :style="{height: leftRightHeight +'px', width: rightW + 'px'}">
			<div class="iui-layout-right-title">
				<span @click="collapseRight">
					<iui-aweicon v-show="!rightClosed" name="angle-double-right" class="iui-layout-right-icon"></iui-aweicon>
					<iui-aweicon v-show="rightClosed" name="angle-double-left" class="iui-layout-right-icon"></iui-aweicon>
				</span>
				<span class="iui-layout-pane-title">{{rightTitle}}</span>
			</div>
			<div class="iui-layout-right-content">
				<slot name="right"></slot>
			</div>
		</div>
		<div class="iui-layout-center" :style="{marginLeft: leftW + 'px', marginRight: rightW + 'px'}">
			<slot></slot>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: "iui-layout",
		data() {
			return {
				width: 0,
				height: 0,
				leftRightHeight: 0,
				leftClosed: false,
				rightClosed: false
			}
		},
		props: {
			left: Boolean,
			leftWidth: Number,
			leftTitle: String,
			right: Boolean,
			rightWidth: Number,
			rightTitle: String
		},

		computed: {
			leftW() {
				if (!this.left) {
					return 0;
				}

				if (this.leftClosed) {
					return 26;
				}

				return this.leftWidth || 180;
			},
			rightW() {
				if (!this.right) {
					return 0;
				}

				if (this.rightClosed) {
					return 26;
				}

				return this.rightWidth || 180;
			}
		},
		components: {},
		methods: {
			setUpArea() {
				var bound = this.$refs.layout.getBoundingClientRect();
				if (this.width == bound.width && this.height == bound.height) {
					return;
				}

				this.width = bound.width;
				this.height = bound.height;
				this.leftRightHeight = this.height - 2; //2个像素的边框
			},

			collapseLeft() {
				this.leftClosed = !this.leftClosed;
			},

			collapseRight() {
				this.rightClosed = !this.rightClosed;
			}
		},
		mounted() {
			const that = this;

			this.$nextTick(function() {
				window.onresize = function() {
					that.setUpArea();
				};
				window.onresize();
			});
		},
		created() {}
	};
</script>