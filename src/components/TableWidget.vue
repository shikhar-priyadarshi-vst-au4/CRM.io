<template>
    <div class="document-table">
        <div class="document-table_header">
            <div>Document</div>
            <small>Document tracking information</small>
        </div>
        <div class="document-table_content">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>File</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(document, index) in documents" :key="index">
                        <td>{{ document.name }}</td>
                        <td>{{ document.file }}</td>
                        <td>{{ document.category }}</td>
                        <td>{{ document.author }}</td>
                        <td>
                            <div :class="document.status == 'Send'? 'send' : 'pending'">{{ document.status }}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        documents: {
            type: Array,
            required: true
        }
    })
</script>

<style scoped>
.document-table{
    background-color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 10px;
}

.document-table .document-table_header{
    display: flex;
    flex-direction: column;
    gap: 5px;
   
}

.document-table .document-table_header div{
    font-weight: 600;
}

.document-table .document-table_header small{
    color: #c5c5c5;
    font-weight: 500;
}

.document-table .document-table_content{
    overflow-y: auto;
}

.document-table_content table{
    width: 100%;
    text-align: left;
}

.document-table_content table th{
    font-weight: 600;
}

.document-table_content table td{
    padding: 10px 0;
    color: var(--vt-c-black);
    font-weight: 500;
    font-size: 0.875rem;
}

.document-table_content table td:nth-child(2){
    text-transform: uppercase;
}

.document-table_content table td:last-child div{
    border-radius: 10px;
    padding: 5px;
    width: 100px;
    text-align: center;
    display: inline-block;
    font-weight: 600;
}

.document-table_content table td:last-child .send{
    color: rgb(77, 143, 77);
    background-color: rgb(172 231 172 / 58%);;
}

.document-table_content table td:last-child .pending{
    color: rgb(238, 144, 21);
    background-color: rgb(241 190 135 / 57%);
}
</style>