# Quick Sort

```fortran
module msort
    implicit none

contains

    function selectpivot(dataset,istart,iend) result(pivot)
        implicit none

        real(8), dimension(:) :: dataset
        integer, value :: istart, iend
        integer :: imid
        real(8) :: pivot
        real(8) :: tmp

        imid = (istart+iend) / 2

        if ( dataset(istart) > dataset(imid) ) then
            tmp = dataset(istart)
            dataset(istart) = dataset(imid)
            dataset(imid) = tmp
        end if

        if ( dataset(iend) < dataset(imid) ) then
            if ( dataset(iend) > dataset(istart) ) then
                tmp = dataset(iend)
                dataset(iend) = dataset(imid)
                dataset(imid) = tmp
            else
                tmp = dataset(iend)
                dataset(iend) = dataset(imid)
                dataset(imid) = dataset(istart)
                dataset(istart) = tmp
            end if
        end if

        !^ istart <= imid <= iend

        tmp = dataset(imid)
        dataset(imid) = dataset(istart)
        dataset(istart) = tmp

        !^ swap istart and imid

        pivot = tmp
    end function

    function partition(dataset,istart,iend) result(ipivot)
        implicit none

        real(8), dimension(:) :: dataset
        integer, value :: istart, iend
        integer :: ipivot
        real(8) :: pivot
        integer :: i, j
        real(8) :: tmp

        i = istart
        j = iend

        pivot = selectpivot(dataset,istart,iend)

        do
            i = i + 1
            j = j - 1
            do while ( dataset(i) < pivot )
                i = i + 1
            end do
            do while ( dataset(j) > pivot )
                j = j - 1
            end do
            if ( i>=j ) exit
            tmp = dataset(j)
            dataset(j) = dataset(i)
            dataset(i) = tmp
        end do
        dataset(istart) = dataset(j)
        dataset(j) = pivot

        ipivot = j
    end function

    recursive subroutine sort_kernel(dataset,istart,iend)
        implicit none

        real(8), dimension(:) :: dataset
        integer, value :: istart, iend
        integer :: ipivot

        do while ( istart < iend )
            ipivot = partition(dataset,istart,iend)
            if ( ipivot-istart < iend-ipivot ) then
                if ( istart < ipivot-1 ) then
                    call sort_kernel(dataset,istart,ipivot-1)
                end if
                istart = ipivot + 1
            else
                if ( iend > ipivot+1 ) then
                    call sort_kernel(dataset,ipivot+1,iend)
                end if
                iend = ipivot - 1
            end if
        end do
    end subroutine

    subroutine sort(dataset)
        implicit none

        real(8), dimension(:) :: dataset
        integer :: n

        n = size(dataset)

        call sort_kernel(dataset,1,n)
    end subroutine

    function issorted(dataset) result(re)
        implicit none

        real(8), dimension(:) :: dataset
        logical :: re
        integer :: i

        re = .true.

        do i=2, size(dataset)
            if ( dataset(i) < dataset(i-1) ) then
                re = .false.
                exit
            end if
        end do
    end function

end module
```
