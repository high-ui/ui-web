<style lang="less">
	table {
		border-collapse: collapse;
	}

	td, th {
		border: 1px solid #eee;
		min-width: 40px;
    	text-align: center;
    	padding: 2px;
	}

	th {
		background-color: #f8f8f8;
	}
</style>
<template>
	<div>
		<table>
			<thead>
				<tr>
					<th rowspan="2" v-for="i in count">{{caps[i - 1]}}</th>
					<th :colspan="monthDays">日期</th>
				</tr>
				<tr>
					<th v-for="i in monthDays">{{i}}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in values">
					<td v-for="i in count">{{item[fs[i - 1]]}}</td>
					<td v-for="i in monthDays" v-html="item.data[i]"></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'MonthDataView',
		data() {
			return {

			}
		},
		props: ['year', 'month', 'fields', 'captions', 'values'],
		computed: {
			monthDays() {
				var d = new Date(this.year, this.month, 0);
				return d.getDate();
			},
			caps() {
				return this.captions.split(',')
			},
			fs() {
				return this.fields.split(',')
			},
			count() {
				return Math.min(this.caps.length, this.fs.length);
			}
		},
		methods: {},
		created() {
			//
		}
	};
</script>