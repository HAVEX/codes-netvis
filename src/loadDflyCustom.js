import p6 from 'p6';
import p6Solo from 'p6-solo';
import dfly from './model/dragonfly-custom';

const ajax = p6.ajax;

export default function loadData(arg) {
    const URL =  arg.path || arg.folder;

    var datafiles = [
        {url: URL + "/dragonfly-cn-stats", dataType: "text"},
        {url: URL + "/dragonfly-link-stats", dataType: "text"}
    ];

    var numJobs = 1;

    if(arg.hasOwnProperty('jobAllocation')) {
        datafiles.push({url: URL + '/' +arg.jobAllocation, dataType: "text"});
    }

    return ajax.getAll(datafiles).then(function(text){
        return new Promise(function(resolve, reject) {
            return resolve(text);
        })
    });
}

