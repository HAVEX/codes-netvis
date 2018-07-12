import p6 from 'p6';
import p6Solo from 'p6-solo';
import dfly from './model/dragonfly';

const ajax = p6.ajax;

export default function loadData(args, callback) {
    const URL =  args.path || args.folder;
    var datafiles = [
            {url: URL + "/dragonfly-msg-stats", dataType: "text"},
            {url: URL + "/dragonfly-router-stats", dataType: "text"},
            {url: URL + "/dragonfly-router-traffic", dataType: "text"}
        ];


    if(args.hasOwnProperty('jobAllocation'))
        datafiles.push({url: URL + '/' +args.jobAllocation, dataType: "text"});

    return ajax.getAll(datafiles).then(function(text){
        return new Promise(function(resolve, reject) {
            return resolve(text);
        })
    })
}

