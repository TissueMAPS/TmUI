interface JobStatusArgs {
    name: string;
    done: boolean;
    failed: boolean;
    state: string;
    percent_done: number;
    subtasks: any[];
    live: boolean;
    memory: number;
    type: string;
    exitcode: number;
    id: number;
    submission_id: number;
    time: string;
    cpu_time: string;
}


class JobCollectionStatus {
    done: boolean;
    failed: boolean;
    state: string;
    percentDone: number;

    constructor(args: JobStatusArgs) {
        if (args == null) {
            this.done = false;
            this.failed = false;
            this.percentDone = 0;
            this.state = '';
        } else {
            this.done = args.done;
            this.failed = args.failed;
            this.state = args.state;
            this.percentDone = args.percent_done;
        }
    }
}


class JobStatus {
    done: boolean;
    failed: boolean;
    state: string;
    memory: number;
    time: string;
    cpu_time: string;
    exitcode: number;

    constructor(args: JobStatusArgs) {
        this.done = args.done;
        this.failed = args.failed;
        this.state = args.state;
        this.memory = args.memory;
        this.time = args.time;
        this.cpu_time = args.cpu_time;
        this.exitcode = args.exitcode;
    }


    getLogOuput() {

    }

}