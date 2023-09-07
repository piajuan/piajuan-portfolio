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
        <div className="container mx-auto m-8 py-16 max-w-[1000px]">
            <h3 className='font-tertiary uppercase text-center mb-4 dark:text-white'>Archives</h3>
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Year</TableHead>
                    <TableHead>Project</TableHead>
                    <TableHead>Made At</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Built With</TableHead>
                    <TableHead className="text-right">View</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {archives.map((archive) => (
                    <TableRow key={archive.project} className='cursor-pointer transition duration-200 opacity-[0.7] hover:opacity-[1]'>
                        <TableCell className="font-medium">{archive.year}</TableCell>
                        <TableCell>{archive.project}</TableCell>
                        <TableCell>{archive.company}</TableCell>
                        <TableCell>{archive.role}</TableCell>
                        <TableCell>{archive.tech}</TableCell>
                        <TableCell> { archive.link ? <LucideArrowUpRight size={20} className='ml-auto mr-0'/> :  <LucideEye size={20} className='ml-auto mr-0'/>} </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>
    </section>
  )
}

export default Archives