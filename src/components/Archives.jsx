import React from 'react'
import { archives } from '../constants'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../components/ui/table"
  import { LucideArrowUpRight , LucideEye } from 'lucide-react'

const Archives = () => {
  return (
    <section className='dark:bg-dark-300'>
        <div className="container mx-auto m-8 py-16 max-w-[1200px]">
            <h3 className='font-tertiary uppercase text-center mb-4 dark:text-white'>Archives</h3>
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Year</TableHead>
                    <TableHead>Project</TableHead>
                    <TableHead>Made At</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Built With</TableHead>
                    <TableHead className="text-right">View</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {archives.map((archive) => (
                    <TableRow key={archive.project} className='group cursor-pointer transition-all opacity-[0.7] hover:opacity-[1] hover:bg-dark-200 [&>*]:font-mono'>
                        <TableCell className="text-primary">{archive.year}</TableCell>
                        <TableCell className="font-bold">{archive.project}</TableCell>
                        <TableCell>{archive.company}</TableCell>
                        <TableCell>{archive.role}</TableCell>
                        <TableCell>{archive.tech}</TableCell>
                        <TableCell> { archive.link ? <LucideArrowUpRight size={20} className='ml-auto mr-0 hover:text-secondary'/> :  <LucideEye size={20} className='ml-auto mr-0 hover:text-secondary'/>} </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>
    </section>
  )
}

export default Archives