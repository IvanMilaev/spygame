export interface ITask {
    guid: string
    id: number
    complexity: string
    type: string
    priority: string
    description: string
    goal: string
    conditions_for_complete: string[]
    conditions_of_fail: string[]
    status: string
    start_date: string
    action_date?: string[][]
    due_date: string
    address?: string[]
    agent: string[]
    main_agent?: string
    support_agent?: string[]
    civil?: string[]
    mentor: string[]
    enemy_agent?: string[]
    org_agent?: string[]
    depend_task?: string[]
    parent_task?: string[]
    children_task?: string[]
    sub_task?: string[]
}
